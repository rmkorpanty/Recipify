import json
def parsing(input):
    print('Parsing inputs')

    """

    making json object

    data = {}
    data['key'] = 'value'
    json_data = json.dumps(data)

    """

    storage = {}
    for i in range(0,5):
        hits = input['hits']
        #dict object
        temp = hits[i]
        recipe = temp['recipe']
        #dictionary for each recipe

        print('Recipe :' + recipe ['label'] + 'url: ' + recipe ['url'] + 'image_link:' + recipe ['image'])
        storage[str(i) + '_url']= recipe ['url']
        storage[str(i) + '_label']= recipe ['label']
        storage[str(i) + '_image']= recipe ['image']

    print('dictionary looks like: ' )
    print(storage)


    #done parsing yay
    return json.dumps(storage)
