<h1 align="center"> Simpsons API </h1>

![APILogo](https://user-images.githubusercontent.com/80676295/200481282-0cb6ec11-3042-43a9-8996-34048b4ca6af.png)

<p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>



An API Rest from The Simpsons, you can get characters, episodes an locations. Made with NodeJs in framework Express.

You can interact with the API REST in the next link:
https://simpsonsapi.up.railway.app/



# :hammer: Project functionalities

- `Funcionality 1`: Get single/all characters, episodes and locations.
- `Funcionality 2`: Create characters,episodes and locations(protected with jwt). 
- `Funcionality 3`: Delete characters, episodes and locations(protected with jwt).
- `Funcionality 3`: Modify characters, episodes and locations(protected with jwt).
- `Funcionality 4`: Create, modify and login with users(protected with jwt)..

# ℹ️📄 Info and Pagination
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


# 🧔🙍 Characters
There is a total of 6 characters sorted by id.

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

You can access to the list of characters by using: https://simpsonsapi.up.railway.app/api/v1/characters endpoint.

## Get single character 
You can access to a single character by using their id in the endpoint. `/characters/1`
You can access to a single character where you can see extra info from them.
| Key | Description |
| :---:   | :---:   |
| firstEpisode | An object with the name and url of the episode where the character debuted. |
| episodes | A list of objects with the names and url to the episodes where the character appears. |
| locations | A list ob objects with the names and url to the locations where the character has been. |

 ## Add episodes to all characters
 You can add appeared episodes to a character by sending a POST to: https://simpsonsapi.up.railway.app/api/v1/characters/add-episode endpoint.
 You need to send the following information:
 | Key | Description |
 | :---:   | :---:   |
 | characterId | The id of the character you want to add episode to.  |
  | episodeId | The id of the episode you want to add to a character. |
  
## Add locations to all characters
 You can add appeared locations to a character by sending a POST to: https://simpsonsapi.up.railway.app/api/v1/characters/add-episode endpoint.
 You need to send the following information:
 | Key | Description |
 | :---:   | :---:   |
 | characterId | The id of the character you want to add location to.  |
 | locationId | The id of the location you want to add to a character. |

## Create character
You can create a character sending a POST using the `/characters` endpoint.
This is an schema of what you need to send in the petition.

| Key     | Type    | Description |                          
| :---:   | :---:   | :---:       |
| name | string | The name of the character. |
|status | string | The status of the character (Alive, Dead, Unknown). |
|occupation | string | The occupation of the character. |
| gender | string | The gender of the character. |
| origin | string | The country of origin of the character. |
| image | URL | An URL to an image of the character. |
| firstEpisodeId | int | The number of episode where the character first appeared. |

This is protected with a JWT, so you need to send a bearer token.
## Edit characters
 You can edit an existing character sendig a PATCH using their id in the  `/characters/id` endpoint.
 This is protected with a JWT, so you need to send a bearer token.
 
## Delete character
You can delete a character by sending a DELETE using their id in the  `/characters/id` endpoint.
 This is protected with a JWT, so you need to send a bearer token.
 
 
# 🟢🌀 Episodes
There is a total of 9 episodes sorted by id.

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

You can access to the list of episodes by using: https://simpsonsapi.up.railway.app/api/v1/episodes endpoint.

## Get single episode 
You can access to a single episode by using their id in the endpoint. `/episodes/1`
You can access to a single episode where you can see extra info from them.
| Key | Description |
| :---:   | :---:   |
| characters | An object with the name and url of the characters that appears in the episode. |
| debute characters | A list of objects with the names and url of the caracters that debuted in this episode. |
| locations | A list ob objects with the names and url to the locations where the episode take place. |
| debute locations | A list of objects with the names and url to the locations that debuted in this episode. |

## Add location to all episodes

 You can add appeared locations to an episode by sending a POST to: https://simpsonsapi.up.railway.app/api/v1/episodes/add-location
 You need to send the following information:
 
 | Key | Description |
 | :---:   | :---:   |
 | locationId | The id of the location you want to add to an episode.  |
 | episodeId | The id of the episode you want to add a location. |


# 🏟️🏛️ Locations
There is a total of 3 locations sorted by id.

| Key     | Type    | Description |                          
| :---:   | :---:   | :---:       |
| id      | Int | The id of the location. |
| name | string | The name of the location. |
|type | string | Type of location it is (church,house,mall). |
|first episode | string | The id of the episode when the location debuted. |
| url | string | An url pointing to this particular location. |
| createdAt | Date | Date where the location was added to the database. |

 ## Get all locations

You can access to the list of locations by using: https://simpsonsapi.up.railway.app/api/v1/locations endpoint.

## Get single location 
You can access to a single location by using their id in the endpoint. `/location/1`
You can access to a single location where you can see extra info from them.
| Key | Description |
| :---:   | :---:   |
| episodes | An object with the name and url of the episodes where the location appears. |
| characters  | A list of objects with the names and url of the caracters that appear in this location. |
| first_episode | A list of objects with the names and url to the first episode the location appears. |



# ⚠️✅ Login

You can access with a POST in: https://simpsonsapi.up.railway.app/api/v1/auth/login endpoint with an username and password. In this access you can obtain a JWT to send petitions to the create, delete, patch and post endpoint of characters, episodes and locations.

There is two types of 'users' 

| User | Description |
| :---:   | :---:   |
| admin | Permission to anything. |
| helper  | Permission to create and edit characters, episodes and locations. |

# 🔨🔧 CURRENTLY WORKING ON: 

   * If you create a character with a first eppisode id that doesn't exist the app crash! 🔴
   * Frontend page for login! 🔴
   * Add more characters, episodes and locations! 🔴 (Feel free to ask for a helper user to enrich the db).
   * Wagger library for documentation. 🔴
