<h1 align="center"> Simpsons API </h1>

![APILogo](https://user-images.githubusercontent.com/80676295/200481282-0cb6ec11-3042-43a9-8996-34048b4ca6af.png)

<p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>



An API Rest from The Simpsons, you can get characters, episodes an locations. Made with NodeJs in framework Express.



## :hammer: Project functionalities

- `Funcionality 1`: Get single/all characters, episodes and locations.
- `Funcionality 2`: Create characters,episodes and locations(protected with jwt). 
- `Funcionality 3`: Delete characters, episodes and locations(protected with jwt).
- `Funcionality 3`: Modify characters, episodes and locations(protected with jwt).
- `Funcionality 4`: Create, modify and login with users.

## ℹ️📄 Info and Pagination
  The API will send all data unless you send mediaquerys.
  You can chain several queries in the same call.
  There is several mediaquerys working such as:
  
 Global

| Key     | Type    | Description |                          
| :---:   | :---: | :---: |
| Limit   | Int   | Number of objects you want for each page. |
| Offset  | Int   | Number of object you are pointing in      |
| name    | String| Name of the object you are looking for    |


Characters

| Key     | Type    | Description |                          
| :---:   | :---: | :---: |
| status  | string | Status of the character Alive, Dead or Unknown |
| gender | string | Gender of the character you are looking for     |
| occupation | string | Occupation of the character you are looking for |
| origin | string | Country of origin of the character |


Locations

| Key     | Type    | Description |                          
| :---:   | :---: | :---: |
| type    | String | Type of location school/church/house you are looking for |
| firstEpisode | Int | Number of episode where the location appeared for the first time |


Episodes

| Key     | Type    | Description |                          
| :---:   | :---: | :---: |
| season | int | Number of the season the episode is |
| episode | int | Number of the episode |


## 🧔🙍 Characters
There is a total of x characters sorted by id.

| Key     | Type    | Description |                          
| :---:   | :---:   | :---:       |
| id      | Int | The id of the character. |
| name | string | The name of the character. |
|status | string | The status of the character (Alive, Dead, Unknown). |
|occupation | string | The occupation of the character. |
| gender | string | The gender of the character. |
| origin | string | The country of origin of the character. |
| image | URL | An URL to an image of the character. |
| firstEpisodeId | int | The number of episode where the character first appeared. |
| createdAt | Date | Date where the character was added to the database. |

 ## Get all characters

You can access to the list of characters by using the `/characters ` endpoint.

## Get single character 
You can access to a single character by using their id in the endpoint. `/characters/1`
You can access to a single character where you can see extra info from them.
| Key | Description |
| :---:   | :---:   |
| firstEpisode | An object with the name and url of the episode where the character debuted. |
| episodes | A list of objects with the names and url to the episodes where the character appears. |
| locations | A list ob objects with the names and url to the locations where the character has been. |


## 🟢🟢 Episodes
There is a total of x episodes sorted by id.

| Key     | Type    | Description |                          
| :---:   | :---:   | :---:       |
| id      | Int | The id of the episode. |
| name | string | The name of the episode. |
|air date | string | Date when the episode first went to air. |
|season | string | The number of season the episode is. |
| episode | string | Number of episode in the season. |
| url | string | An url pointing to this particular episode. |
| createdAt | Date | Date where the episode was added to the database. |

 ## Get all episodes

You can access to the list of episodes by using the `/episodes ` endpoint.

## Get single episode 
You can access to a single episode by using their id in the endpoint. `/episodes/1`
You can access to a single episode where you can see extra info from them.
| Key | Description |
| :---:   | :---:   |
| characters | An object with the name and url of the characters that appears in the episode. |
| debute characters | A list of objects with the names and url of the caracters that debuted in this episode. |
| locations | A list ob objects with the names and url to the locations where the episode take place. |
| debute locations | A list of objects with the names and url to the locations that debuted in this episode. |


