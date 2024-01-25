from flask import Blueprint, render_template

views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html")

@views.route("/randomizer")
def randomizer():
    return render_template("randomizer.html")

@views.route("/results")
def result():
    return render_template("results.html")