# eonet
[Live Site](https://eonet-gamma.vercel.app/)

Etched into my brain after solved frustrations / things learned:
- Next.js only loads environment variables that start with `NEXT_PUBLIC_` on the *client-side* to prevent accidentally exposing sensitive data to the client. Otherwise, to fetch env vars on the server-side, you can use the traditional `process.env` object directly.
- "Geometric objects with additional properties are Feature objects. Sets of features are contained by FeatureCollection objects." - [source](https://geojson.org/)
```json
// geojson specs
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```
