import random
# List of words to choose from
word_list = ['python', 'java', 'javascript', 'ruby', 'html', 'css']
# Randomly select a word from the list
selected_word = random.choice(word_list)
# Initialize the user's guess
value=True
while(value):
    print("Hi!This program was made to make you guess some words")
    print("The following words are... pyhton, java, javascript, ruby, html, css.")
    print(" ")
    user_guess = input()
    if user_guess==selected_word:
        print("Yay! Congrats, I knew you werent that dumb")
    elif user_guess!=selected_word:
        print("Ermmm..no, keep guessing.")
    print(" ")
    print(" ")