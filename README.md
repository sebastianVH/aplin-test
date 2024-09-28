
# Aplin Code Challenge

## Descripcion
Esta aplicacion se encarga de calcular los diferentes niveles en el inventario por cada articulo que haya en stock.

## Objetivo
El objetivo es poder obtener, en cada nivel del inventario,los siguientes datos de cada articulo:

- Cant. en el inventario.
- Cant. que no pueden ser usados para completar una orden.
- Cant. que pueden ser utilizados para una orden que aun no se ha cumplido.
- Cant. necesaria para cumplir con todas las ordenes.

## Tecnologias usadas:

 - **Express**: para la creacion del servidor.
 - **TypeScript**: para el manejo de un tipado del tipo estatico.


## Estructura del proyecto:

### Carpetas
- src: carpeta principal de archivos.
- controllers: funciones que manejan las solicitudes y devuelven una respuesta.
- routes: contiene los endpoints que derivan a las solicitudes.
- utils: funciones que no estan directamente relacionadas con una solicitud.

### Archivos importantes
- index.ts: contiene la app para su correspondiente ejecucion.
- types.ts: contiene todas las interfaces creadas para el uso de la aplicacion, para el correcto tipado en TypeScript.


## Uso de la API 

#### Obtener los niveles de inventario

```http
  POST /inventory-levels
```
| Parametro | Tipo               | Descripcion                               |
| :-------: | :-----------------:| :----------------------------------------:|
|   `body`  | `application/json` | Objeto con propiedades inventory y orders |

## Ejemplo:
```json
{
  "inventory": [
    {
      "sku": "A01",
      "stock": {
        "count": "12",
        "blocked": 0
      }
    },
    {
      "sku": "A02",
      "stock": {
        "count": "10",
        "blocked": 2
      }
    },
    {
      "sku": "A03",
      "stock":{
        "count":"8",
        "blocked":0
    }
  }
  ],
  "orders": [
    {
      "id": "1001",
      "order_lines": [
        {
          "sku": "A01",
          "quantity": 1
        },
        {
          "sku":"A02",
          "quantity":20
        }
      ]
    },{
      "id":"1002",
      "order_lines":
      [
        {
          "sku":"A01",
          "quantity":1
        }
      ]
    }
  ]
}
```

## Respuesta

| Status | Descripcion         | Respuesta              |
| :----: | :------------------:| :---------------------:|
|   200  | Solicitud correcta  | Objeto inventoryLevels |

## Ejemplo de respuesta:

```json

{
  "inventoryLevels": [
    {
      "sku": "A01",
      "count": 12,
      "blocked": 0,
      "booked": 2,
      "missing": 0,
      "available": 10
    },
    {
      "sku": "A02",
      "count": 10,
      "blocked": 2,
      "booked": 8,
      "missing": 12,
      "available": 0
    },
    {
      "sku": "A03",
      "count": 8,
      "blocked": 0,
      "booked": 0,
      "missing": 0,
      "available": 8
    }
  ]
}

```

## Como ejecutar el proyecto

1. Clona el repositorio

```bash
  git clone https://github.com/sebastianVH/aplin-test.git
```

2. Ingresa a la carpeta del proyecto
```bash
  cd aplin-code-challenge
```

3. Instalar dependencias

```bash
  npm install
```

4. Iniciar el servidor

```bash
  npm run start
```
5. Enviar una petición POST al endpoint `http://localhost:3000/inventory-levels` con un JSON que contenga los objetos de inventario y órdenes en el cuerpo de la petición, tal como figura en la documentacion. 
**Nota:** se incluye en el repositorio tambien, un archivo *Aplin Challenge.postman_collection.json*, para importar y utilizar la coleccion en Postman con el ejemplo. 

