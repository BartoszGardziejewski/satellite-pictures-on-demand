# satellite-pictures-on-demand
this application will allow client to subscribe in order to receive satellite pictures of given area, made in given time interval, e.g. one week, two weeks, monthly. Satellites in this version will be mock ups


* What does the application give to the client :
  * Allows client to subscribe in order to receive satellite pictures of given area, made in given time interval, e.g. one week, two weeks, monthly
* Who can use this application:
  * Application can be used for example by construction managers to check building progress without visiting the building site every week.
* What are we planning to do, in short:
  * Back-end with data base
  * Rest API connected to data base
  * Rest API allowing communication with Satellite
    * Mocked satellite service sending data to Rest API
  * Front-end web page getting data from Rest API 

# Backend documentation

 - To see full backend documentation endpoints visit `/docs` after run the application.

#### Steps to run backend:
- `pip install -r requirements`
- `python manage.py migrate`
###### In one console window run satellite photo downloader:
- `python manage.py satellite`
###### In another run application on port 5000:
- `python manage.py runserver 5000`.
