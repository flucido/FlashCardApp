from flask import Flask, render_template, jsonify
import csv

app = Flask(__name__)

def read_csv():
    flashcards = []
    with open("flashcards.csv", mode="r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            flashcards.append(row)
    return flashcards

@app.route('/')
def index():
    flashcards = read_csv()
    return render_template('index.html', flashcards=flashcards)

if __name__ == '__main__':
    app.run(debug=True)
