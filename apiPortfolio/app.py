from flask import Flask, request, jsonify
from wtforms import StringField, TextAreaField, validators
from wtforms import Form
from flask_cors import CORS
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
from datetime import date
import os
import bleach
import threading
import datetime
import secrets
import re
import smtplib


app = Flask(__name__)

load_dotenv()
CORS(app, resources={r"/api/send-email": {"origins": "https://www.dionfrancois.com"}})
app.debug = False
@app.route('/api/send-email', methods=['POST'])
def receive_data():
    data = request.get_json()
    if not data:
        return jsonify({'errors': 'No data provided'}), 400
    
    is_valid, error_message = check_input(data.get('name'), data.get('email'), data.get('message'), data.get('title'))
   
    if is_valid:
        
        email_thread = threading.Thread(target=send_email, args=(data.get('name'), data.get('email'), data.get('message'), data.get('title')))
        email_thread.start()

        return jsonify({"message": "Email sent successfully."}), 200
    
    else:
        return jsonify({'errors': error_message}), 400  

def send_email(name, email, message, title):
    
    print("sending email")
    
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    smtp_username = os.getenv('SMTP_USERNAME')
    smtp_password = os.getenv('SMTP_PASSWORD')
    

    with open('email_templates/email_template_pro/email_template.html', 'r') as html_file:
        html_content = html_file.read()

    with open('email_templates/email_template_pro/email_style.css', 'r') as css_file:
        css_content = css_file.read()
    
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(smtp_username, smtp_password)

    subject = title
    to_email = smtp_username
    msg = MIMEMultipart('alternative')
    msg['From'] = to_email
    msg['To'] = to_email
    msg['Subject'] = subject

    html_content = html_content.format(name=name, message=message, email=email)
    html_message = f"""
        <html>
            <head>
                <style>
                    {css_content}
                </style>
            </head>
            <body>
                {html_content}
            </body>
        </html>
    """
    
    msg.attach(MIMEText(html_message, 'html'))

    # Send the email
    server.sendmail(to_email, to_email, msg.as_string())
    
    send_email_to_sender(name, email, message, title)
    
    server.quit()
    
    print("email sent")
    return True

def send_email_to_sender(name, email, message, title):
    
        date_today = str(date.today().strftime('%Y-%m-%d'))
        print("sending email to sender")
        
        smtp_server = 'smtp.gmail.com'
        smtp_port = 587
        smtp_username = os.getenv('SMTP_USERNAME')
        smtp_password = os.getenv('SMTP_PASSWORD')
        
        with open('email_templates/email_template_to_sender/email_template_to_sender.html', 'r') as html_file:
            html_content = html_file.read()
    
        with open('email_templates/email_template_to_sender/style_template_to_sender.css', 'r') as css_file:
            css_content = css_file.read()
        
        server = smtplib.SMTP(smtp_server, smtp_port)
        
        server.starttls()

        server.login(smtp_username, smtp_password)
        
        subject = "Francois Dion - Thank you for your message"
        to_email = email
        from_email = smtp_username
        msg = MIMEMultipart('alternative')
        msg['From'] = from_email
        msg['To'] = to_email
        msg['Subject'] = subject
        
        html_content = html_content.format(name=name, message=message, email=email, date=date_today)
        html_message = f"""
            <html>
                <head>
                    <style>
                        {css_content}
                    </style>
                </head>
                <body>
                    {html_content}
                </body>
            </html>
        """
        
        msg.attach(MIMEText(html_message, 'html'))


        server.sendmail(to_email, to_email, msg.as_string())
        server.quit()
        
        print("email sent")
        return True

def check_input(name, email, message, title):
    print("checking the input")
    errors = {}
    
    name = bleach.clean(name)
    email = bleach.clean(email)
    message = bleach.clean(message)
    title = bleach.clean(title)

    if not title:
        errors['title'] = 'Title is required'
    if not name:
        errors['name'] = 'Name is required'
    if not email:
        errors['email'] = 'Email is required'
    if not message:
        errors['message'] = 'Message is required'

    if len(name) > 200:
        errors['name'] = 'Name is too long'
    if len(email) > 250:
        errors['email'] = 'Email is too long'
    if len(message) > 1500:
        errors['message'] = 'Message is too long'
    if len(title) > 200:
        errors['title'] = 'Title is too long'
        
    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        errors['email'] = 'Email is not valid'
    
    if not re.match(r"^[a-zA-Z]+(?:-[a-zA-Z]+)*$", name):
        errors['name'] = 'Name only accepts letters and hyphens'
        
    if not re.match(r"^[a-zA-Z]+(?:-[a-zA-Z]+)*$", title):
        errors['title'] = 'Title only accepts letters, hyphens and spaces'
        
    if errors:
        return False, errors

    return True, None

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
