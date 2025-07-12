from flask import Blueprint,render_template,request,flash,redirect,url_for

auth = Blueprint('auth',__name__) #defining blueprint

@auth.route('/login',methods=['GET','POST'])
def login():
    data=request.form
    print(data)
    return render_template("login.html", boolean=True)

@auth.route('/logout')

def logout():
    return "<h1>Hello, logout!</h1>"

@auth.route('/signup',methods=['GET','POST'])
def signup():
    if request.method=='POST':
        name=request.form.get('name')
        email=request.form.get('email')
        password=request.form.get('password')
        confirmPassword=request.form.get('confirmPassword')

        if password!=confirmPassword:
            flash('Passwords don\'t match.',category='error')
        elif len(name)<2:
            flash('Name must be greater than 1 character.',category='error')
        elif len(email)<4:
            flash('Email must be greater than 3 characters.',category='error')
        elif len(password)<7:
            flash('Password must be at least 7 characters.',category='warning')
        elif len(confirmPassword)<7:
            flash('Confirm Password must be at least 7 characters.',category='warning')
        else:
            flash('Account created!',category='success')

    return render_template("sign.html", boolean=True)

