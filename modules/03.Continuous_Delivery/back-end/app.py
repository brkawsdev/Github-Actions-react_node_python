from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/message', methods=['GET'])
def get_message():
    # Send a sample message to the React frontend
    return jsonify({'message': 'Hello from Flask Backend!'})

if __name__ == '__main__':
    app.run(debug=True)
