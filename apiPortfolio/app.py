from flask import Flask, request, jsonify
from wtforms import StringField, TextAreaField, validators
from wtforms import Form
from flask_cors import CORS
import secrets
import re
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv
import bleach
import threading

app = Flask(__name__)
app.debug = True

load_dotenv()
CORS(app, resources={r"/api/send-email": {"origins": "*"}})

@app.route('/api/send-email', methods=['POST'])
def receive_data():
    data = request.get_json()
    if not data:
        return jsonify({'message': 'No data provided'}), 400
    
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
    
    # Load HTML content from file
    with open('email_templates/email_template.html', 'r') as html_file:
        html_content = html_file.read()

    # Load CSS content from file
    with open('email_templates/email_style.css', 'r') as css_file:
        css_content = css_file.read()
    
    # Create a connection to the SMTP server
    server = smtplib.SMTP(smtp_server, smtp_port)
    
    # Start the TLS encryption
    server.starttls()
    
    # Log in to your email account
    server.login(smtp_username, smtp_password)
    
    # Create an email message
    subject = title
    to_email = smtp_username
    msg = MIMEMultipart('alternative')
    msg['From'] = to_email
    msg['To'] = to_email
    msg['Subject'] = subject
    
    

    # Replace placeholders in HTML content with actual data
    html_content = html_content.format(name=name, message=message, email=email)

    # Construct the HTML email message
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
    
    # Quit the server
    server.quit()
    
    print("email sent")
    return True

def check_input(name, email, message, title):
    print("checking the input")
    errors = {}

    if not title:
        errors['title'] = 'Title is required'
    if not name:
        errors['name'] = 'Name is required'
    if not email:
        errors['email'] = 'Email is required'
    if not message:
        errors['message'] = 'Message is required'

    # Perform HTML sanitization
    name = bleach.clean(name)
    email = bleach.clean(email)
    message = bleach.clean(message)
    title = bleach.clean(title)

    if len(name) > 200:
        errors['name'] = 'Name is too long'
    if len(email) > 250:
        errors['email'] = 'Email is too long'
    if len(message) > 1500:
        errors['message'] = 'Message is too long'
    if len(title) > 200:
        errors['title'] = 'Title is too long'
    
    if errors:
        return False, errors

    return True, None



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
