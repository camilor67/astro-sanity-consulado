export const IMAGE = `
  {
    "_id": image.asset->_id,
    "src": image.asset->url,
    "dimensions": image.asset->metadata.dimensions,
    "alt": alt,
  }
`;

export const SECTIONS = `{
  ...,
  backgroundImage {
    ...,
    "image": {
      "_id": image.asset->_id,
      "src": image.asset->url
    }
  },
  _type == "cardsSection" => {
    items[] {
      ...,
      image ${IMAGE}
    }
  },
  _type == "logosSection" => {
    items[] ${IMAGE}
  },
  _type == "menuSection" => {
    dishes[]-> {
      _id,
      name,
      description,
      price,
      category,
      image ${IMAGE}
    }
  }
}`;
