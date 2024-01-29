from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

client_name = []

def save_name(name):
    client_name.append(name)

@app.route('/name', methods=['GET', 'POST'])
def display_name(name):
    if request.method == 'POST':
        name = request.form['name']
        save_name(name)
        return redirect(url_for('next_page'))  # Redirect to the next_page route
    return render_template('index.html', name="")

@app.route('/next_page')
def next_page(name):
    return render_template('next_page.html', name=client_name[name])  # Pass the saved name to the template


if __name__ == "__main__":
    app.run(debug=True)
