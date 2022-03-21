# requirements.txt should have:
# beautifulsoup4==4.6.3
# firebase-admin


# test example:
# {
#   "business_id": "nFtM5HWLlZshymBPFco0",
# }

from bs4 import BeautifulSoup
import requests
import datetime
import json

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate({
"type": "service_account",
  "project_id": "appetizingapps-90166",
  "private_key_id": "bc36b41928476a47f5506cf6e77e337f48be2ea3",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQFxlAMspcZQeV\nJcIMvlwE3FxU1xtl1ajEeRpaGE6OcUjwuo2wIFl5622k3QCA88uK51/YOnm7K2On\nBu4nUTPvMN5LNT3RqyI6stTvblVvFzOkhNjomnoYyLnsmbEDCGoLrmXFGlCLjZhV\n2rzKFNT0dRasw7FpHxoyubH/gmm+NyDN3VSmec53N3g2nfwinMhohmEAaEuoSk39\nfEQzUi7WvYGYoDToG+8rAe7S5EnTCoTBSv/9AYTkDC9sSY8Os3M0KGuTIp1jJZi4\nrlS7rMPE8IXnKYovc+x1pNGjjWXypXPTXRg7DsGzeN2bDWQZUvq1/XJ35Yo+S76N\nl2t9Ln8RAgMBAAECggEAFE6EwM6UD+MuE8B9CNhUy4ajngXl3xC0KQQ2bZ9cnyrv\n9soFxK/Le4ndh86nW24vKU19/XBra7gGwAh9mimi+08WClnWQA1GyFqmS/1E6hPm\nDsKGFmDo1F1WQ4AWFZkvHBe3R75TKOM2//3aGZBh3b9FaLOqLvuBh3y2oZwc7Jpw\nZQoC7tuy7MzvgFR4Oqybm9tnlhiSmh4iPkVYCpJmpqybp63VgLWijzYVvsMfz/r4\nje5n08rXaj0T09yAxLP2G+465TsyqBZu2TqnZ4h3AwrC6kHR/0yrn32aXDhajV0w\nYfvJhmVs69SYCj/E4J+9P0cTICofvGNKVKO0EsbdFwKBgQD88QX6WziZwfGFYFTt\nvyBG4fsZEBMa3pJwKeqxuX+1sG1HGp0oF+SPGPtg03bTEDx1TrJT+YPgHKtk5gzx\ngNRLVfFaS+Xzcd8nDcyR7+FfPgjAczNP0+Z1XmRuUYHurR0CESMh4paFS2g3qQnE\nbo+xj8V30X7HJxdJiFEIF1wCCwKBgQDSmz0lOMvkXyNkaAJN2PSZXR1JMx0F7iJo\nMAKZYlP0ksyfboV+l3NtPu5wgM3ExYkXKC+HFGp7XdL9H1TJiXB8RY3gIBDRR1oj\n8kWgNEsPhuT4lpOmAi7cnaMQNYlDckt4vJh9CG91BB045RzbO7M4N3pZgdNh5t6w\nJR2w7txw0wKBgDK7wUAy9cpZTTE8XiyFjlrJTsz7HWnhRKv8rFdTZpsxtOlzHByD\nllNhZmJIZ+fztLyuuTQAswPLnFETl3sFJQ+rQEqlOI04xNKXgPWwkJrC3YyETsFv\nNiVKdohuDsqprEzS1SIhyaEYu+GWJSBiMK4jsS7UNUKKw6/7CI2/6bN7AoGBAMrH\nN8dn+UEIrW4WiuljlJc5xWHeefpkv/IrD8WZnBZnZee4JYau0i+EoVXnXrgwLgAC\n7EgWSzQ/MVAQY7WsxIaS/binhynJlqv3sDxBPWhUzI/hg4Yaof4/NWr88Q3ktXAp\nvnTcs1wquuw2BWO9BqGBISefTeT8wrs88WqTgeKLAoGAP1ZGngXV45ObP9MkYLsB\nKdZyXgGQdz386emjJscwv90iX6VTY+5h72wDaq5siTQHL5s3s3iadLxoKZB+LEep\nOb1/LOKCbxlPmhmpNIkHA4VvK0i/yE5RLLWwrUC8naqGnsm+F1MqaXWNg7WJihnF\n4pgrymwqjOd3jVLZ+rpa+7g=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-bkcy1@appetizingapps-90166.iam.gserviceaccount.com",
  "client_id": "114334458786124558127",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bkcy1%40appetizingapps-90166.iam.gserviceaccount.com"
})
firebase_admin.initialize_app(cred)

#change URL
URL = 'https://www.eatandys.com/full-menu'
DISTRIBUTION_HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36'
}

# call
def update(request):
    # OPTIONS
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return ('', 204, headers)
    request_body = request.get_json()
    url_params = request.args
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }

    # check POST
    if request.method != "POST":
        return ('Resource not found', 404, headers)

    # validate
    if request_body and 'business_id' in request_body:
        business_id = request_body['business_id']
        db = firestore.client()
        menu_query_results = list(db.collection('businesses').document(business_id).collection('menu').stream())

        # exists
        if len(menu_query_results) == 0: 
            menu_coll = db.collection('businesses').document(business_id).collection('menu')
            raw_html = requests.get(URL, headers=DISTRIBUTION_HEADERS).text
            soup = BeautifulSoup(raw_html, 'html.parser')
            item_list = soup.find_all('div', class_='sqs-block-html')
            counter = 0
            for item in item_list:
                name = item.find_all('h2')
                desc = item.find_all('p')
                if len(name) > 0 and len(desc) > 0:
                    menu_doc = menu_coll.document()
                    menu_obj = {}
                    price = ""
                    menu_obj['name'] = str(name[0].getText()).strip()
                    menu_obj['description'] = str(desc[0].getText()).strip()
                    menu_obj['price'] = price
                    menu_obj['id'] = menu_doc.id
                    menu_doc.set(menu_obj)
                    counter += 1

            # data for caller
            data = {
                'itemsAdded': counter
            }
            return (json.dumps(data), 200, headers)

    # default
    return ('Bad request.', 400, headers)