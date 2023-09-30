from flask import Flask, request, jsonify
import smtplib
import ssl
from email.message import EmailMessage

app = Flask(__name__)

@app.route('/')
def index():
    # Render the HTML page
    return open('index.html', 'r').read()

@app.route('/send_email', methods=['POST'])
def send_email():
    data = request.get_json()
    email_address = data.get('email')

    # Email sending logic
    email_sender = 'seogroup15.doctorsappts@gmail.com'
    email_password = 'edmzvbelgedrsxuu'
    subject = 'Check out my new video!'
    body = """
    I've just published a new video on YouTube: https://youtu.be/2cZzP9DLlkg
    """

    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_address
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()
    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.starttls(context=context)
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_address, em.as_string())

    return jsonify(message='Email sent successfully')

if __name__ == '__main__':
    app.run(debug=True)


