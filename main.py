import requests, urllib
import webapp2

response = requests.get(
    "https://www.evbdev.com/ebapi/v3/users/me/owned_events/",
    headers = {
        "Authorization": "Bearer TA6EMPLCFR3JKTNGWNDR",
    },
    verify = True,  # Verify SSL certificate
)
print response.json()['events'][0]['name']['text']

OAUTH_TOKEN = 'your-token-here'
MEDIA_UPLOAD_URL = 'https://www.eventbriteapi.com/v3/media/upload/'

def upload_file(filename):
    instructions_url = MEDIA_UPLOAD_URL + '?' + urllib.urlencode({
        'type': 'image-event-logo',
        'token': OAUTH_TOKEN
    })
    data = requests.get(instructions_url).json()
    post_args = data['upload_data']
    response = requests.post(data['upload_url'],
        data = post_args,
        files = {
            data['file_parameter_name']: open(filename)
        }
    )
    return response, data['upload_token']

response, upload_token = upload_file('~/Pictures/test-image.jpg')
