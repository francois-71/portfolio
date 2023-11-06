FROM python:3.8

WORKDIR /app

COPY . /app

RUN pip install --upgrade pip

RUN pip install --upgrade Flask

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5000"]

