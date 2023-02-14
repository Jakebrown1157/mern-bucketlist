# Project mern-bucket list

Mern bucketlist is an app where a user can create and modify bucket list activities.

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The intro page |
| GET | `/home` | Index page listing all bucket activities |
| GET | `/Create` | New form to create an activity |
| POST | `/Edit` | Create a new bucket activity |
| GET | `/buckets/:id/edit` | Edit form for a bucket activity |
| PUT | `/buckets/:id` | Make changes to existing bucket activity |
| DELETE | `/buckets/:id` | Delete a bucket activity  |
| POST | `/buckets/:id/bucket` | Add rant to a bucket activity |
| DELETE | `/buckets/:id/rant/:bucketId` | Delete a bucket activity |

## Database

**places** 

| Field | Type |
| ---------- | ------------ |
| bucket_id | INTEGER |
| item | STRING |
| difficulty | INTEGER |
| author | STRING |
| description | STRING |



## Credit

Credit to Web Dev Simplified at https://www.youtube.com/watch?v=SLfhMt5OUPI
Credit to Skull Image https://www.freeiconspng.com/img/5244
Credit to Background texture https://easyimages.net/?utm_content=18.06.21-18:00-pop&q=Dot%20clipart%20texture%20vector&land=1&from_stock=webstockreview_net&format=undefined&keyword=Dot%20clipart%20texture%20vector&utm_content=18.06.21-18:00-pop&from_url=https://webstockreview.net/explore/dot-clipart-texture-vector/

## Authors  

Alexis Delgado
Jake Brown
Yara Alfaro-Sullivan