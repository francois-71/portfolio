FROM python:3.8

WORKDIR /app

COPY . /app

RUN pip install --upgrade pip

RUN pip install --upgrade Flask

RUN pip install -r requirements.txt

EXPOSE 80

CMD ["python", "app.py"]
