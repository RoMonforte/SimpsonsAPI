<h1 align="center"> Simpsons API </h1>

![APILogo](https://user-images.githubusercontent.com/80676295/200481282-0cb6ec11-3042-43a9-8996-34048b4ca6af.png)

<p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>



An API Rest from The Simpsons, you can get characters, episodes an locations. Made with NodeJs in framework Express.

## :hammer: Project functionalities

- `Funcionality 1`: Get single/all characters, episodes and locations.
- `Funcionality 2`: Create characters,episodes and locations. 
- `Funcionality 3`: Delete characters, episodes and locations.
- `Funcionality 3`: Modify characters, episodes and locations.

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
