from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate-square', methods=['POST'])
def calculate_square():
    data = request.get_json() or {}

    try:
        value = float(data.get('value', 0))
    except ValueError:
        return jsonify({'error': 'Потрібно ввести число'}), 400

    return jsonify({
        'input': value,
        'result': value ** 2
    })

if __name__ == '__main__':
    app.run(debug=True)
