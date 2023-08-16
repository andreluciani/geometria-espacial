export function generatePrism(
  n: number,
  edgeSize: number,
  height: number,
  inclination: number = 0
): { vertices: number[]; faces: number[] } {
  if (n < 3 || n > 4) {
    throw new Error("The prism must have at least 3 sides and at max 4 sides");
  }
  if (edgeSize < 0 || edgeSize > 50) {
    throw new Error("The prism edge size must be between 0 and 50");
  }
  if (height < 0 || height > 50) {
    throw new Error("The prism height must be between 0 and 50");
  }
  if (inclination <= -Math.PI / 2 || inclination >= Math.PI / 2) {
    throw new Error("The prism inclination must be between -90° and 90°");
  }
  let baseVertices: number[] = [];
  let topVertices: number[] = [];
  const vertices: number[] = [];
  const faces: number[] = [];
  switch (n) {
    case 4:
      // generate base polygon vertices
      baseVertices = [
        -edgeSize / 2,
        0,
        -edgeSize / 2, //
        edgeSize / 2,
        0,
        -edgeSize / 2, //
        edgeSize / 2,
        0,
        edgeSize / 2, //
        -edgeSize / 2,
        0,
        edgeSize / 2, //
      ];
      faces.push(
        0,
        1,
        2,
        0,
        2,
        3, // base
        0,
        1,
        5,
        0,
        5,
        4, // front
        1,
        2,
        6,
        1,
        6,
        5, // right
        2,
        3,
        7,
        2,
        7,
        6, // back
        3,
        0,
        4,
        3,
        4,
        7, // left
        4,
        5,
        6,
        4,
        6,
        7 // top
      );
      break;
    default:
      // must be 3
      // generate base polygon vertices
      baseVertices = [
        -edgeSize / 2,
        0,
        -(edgeSize / 2) * Math.sqrt(3) / 3, //
        edgeSize / 2,
        0,
        -(edgeSize / 2) * Math.sqrt(3) / 3, //
        0,
        0,
        edgeSize * Math.sqrt(3) / 3, //
      ];
      faces.push(
        0, 1, 2, // base
        0, 1, 4, 0, 4, 3, // front
        1, 2, 5, 1, 5, 4, // right
        2, 0, 3, 2, 3, 5, // left
        3, 4, 5 // top
      );
  }
  // the top vertices have the same coordinates but different height
  topVertices = [...baseVertices];
  for (let i = 1; i < 12; i += 3) {
    topVertices[i] += height;
  }
  // if there's an inclination, the top coordinates should be translated accordingly
  for (let i = 0; i < 12; i += 3) {
    topVertices[i] += height * Math.tan(inclination);
  }
  vertices.push(...baseVertices, ...topVertices);
  return { vertices, faces };
}
