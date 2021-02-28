#says hi when someone says hi to me

#from bs4 import BeautifulSoup
#from urllib.parse import urlparse

import praw
import time
import re
import requests
#import bs4

import firebase_admin

from firebase_admin import db

import time

def authenticate():
  print("Authenticating...\n")
  #reddit = praw.Reddit('hibot',user_agent = 'web:hi-bot:v0.1 (by /u/The_Senpat)')
  reddit = praw.Reddit(client_id='P6KBJamDVskaOQ',
                     client_secret="KhlUmoWTy21NVtHtbPEmAT1mBv4", password='bot1password',
                     user_agent='hibot by /u/TheSenpat', username='spbot1')
  print('Authenticated as {}\n'.format(reddit.user.me()))
  return reddit

def run_bot(reddit):
    print("getting stocks")
    f = open("stocks.txt")

    allstocks = {}
    for line in f.readlines():
        words = line.split()
        if(len(words[0]) > 1):
            allstocks[words[0]] = 0
    print(str(len(allstocks)) + "stocks found")
    
    
    print('getting comments...\n')
    
    for comment in reddit.subreddit('wallstreetbets').comments(limit = 1000):
        print(comment.created_utc)
        
def run_bot2(reddit):
    print("getting stocks")
    f = open("stocks.txt")

    allstocks = {}
    for line in f.readlines():
        words = line.split()
        if(len(words[0]) > 1 and '.' not in words[0]):
            allstocks[words[0]] = 0
    print(str(len(allstocks)) + "stocks found")

    print("setting up firebase")
    cred_obj = firebase_admin.credentials.Certificate('thatsbullish-15d47-firebase-adminsdk-a0q0p-3afad4f863.json')
    default_app = firebase_admin.initialize_app(cred_obj,{
        'databaseURL':'https://thatsbullish-15d47-default-rtdb.firebaseio.com'
    })

    ref = db.reference("stockpraw4")

    submissionsseen = set()

    unique = 0
    subcount = 0
    starttime = time.time()
    for sub in ["wallstreetbets","investing","stocks","stockmarket"]:

        for submission in reddit.subreddit(sub).new(limit=None):

            try:
                if(submission.id in submissionsseen):
                    continue
                submissionsseen.add(submission.id)

                subcount+=1
                
                if(subcount % 20 == 0):
                    print(subcount,unique)
                    print(time.time()-starttime)

                if(subcount == 5 or subcount % 100 == 0):
                    ref.set(allstocks)
                
                #just to speed things up
                if(submission.num_comments<5):
                    continue

                for comment in submission.comments.list():
                    #print(comment.id)
                    if(not comment):
                        continue
                    words = comment.body.split()
                    seen = set()
                    for word in words:
                        if(word[0] == '$'):
                            word = word[1:]
                        if(word in allstocks and word not in seen):
                            if(allstocks[word] == 0):
                                unique+=1
                            print(word)
                            allstocks[word]+=1
                            seen.add(word)
            except:
                print("Error")
                continue

        for submission in reddit.subreddit(sub).hot(limit=None):

            try:
                if(submission.id in submissionsseen):
                    continue
                submissionsseen.add(submission.id)
                
                subcount+=1
                
                if(subcount % 20 == 0):
                    print(subcount,unique)
                    print(time.time()-starttime)

                if(subcount == 5 or subcount % 100 == 0):
                    ref.set(allstocks)
                
                #just to speed things up
                if(submission.num_comments<5):
                    continue

                for comment in submission.comments.list():
                    #print(comment.id)
                    if(not comment):
                        continue
                    words = comment.body.split()
                    seen = set()
                    for word in words:
                        if(word[0] == '$'):
                            word = word[1:]
                        if(word in allstocks and word not in seen):
                            if(allstocks[word] == 0):
                                unique+=1
                            print(word)
                            allstocks[word]+=1
                            seen.add(word)
            except:
                print("Error")
                continue
              
        
    
def main():
    print("main2")
    reddit = authenticate()
    print("main3")
    #while True:
    #    run_bot(reddit)
    run_bot2(reddit)
if __name__ == '__main__':

    
    
    print("main1")
    main()

    print("Done!")
