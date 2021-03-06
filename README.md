# SecondCloset Takehome Assignment - Jared Flomen
 
## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the API server using the `npm start` command.

## Making API Calls

1. Create an account on [Postman](https://www.postman.com/) to simulate the POST request
2. On the top left under Workspaces, click New Workspace, name it however you'd like. 
3. In the top left, under home you should see your team's name. Directly to the right, click 'New', then click 'Request'. Create a name under 'Request Name'. Scroll down and click '+Create Collection', name it and click the plus to the right. Then click 'Save'
4. Change the request type to POST (to the left of the blue Send button)
5. Change the settings to body, select raw (round buttons) and change the dropdown to JSON from text
6. Enter the following as the URL: <http://localhost:3001/api>
7. Enter the following code to test the API:
{
    "fee": "20",
    "customer": "D",
    "items": [
        {
            "name": "Fridge",
            "length": "3",
            "height": "6",
            "width": "4",
            "weight": "300",
            "value": "1000"
        },{
             "name": "Sofa",
            "length": "6",
            "height": "4",
            "width": "3",
            "weight": "100",
            "value": "500"
        }
    ]
}
8. Optional - I downlaoded Postman's desktop agent as the requests were not being delivered (can be found in the bottom right footer)
9. Your quote will be displayed in the body of the response. Check the console if it doesn't open automatically.

## Customization

* The user can change the fee in the body of the request
* The user can add more items to the items object
* The user can change between customers A, B, C or D

## Captures

![Screenshot](https://github.com/JaredFlomen/SecondCloset/blob/main/docs/SendingRequest.png?raw=true)
