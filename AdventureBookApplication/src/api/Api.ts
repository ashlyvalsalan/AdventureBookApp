

const API_BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";
let adventureList: any;

const getAdventures = async () => {
  const url = `https://adventure-book-api.azurewebsites.net/api/AdventureBook/GetAdventure`;
  const res = await fetch(url); //.then(res => res.json).then(res => JSON.parse(res));
  // console.log("api");
  const data = await res.json();
  // console.log(data);
  adventureList = data;
  // console.log(data);
  return data;
};

export const GetAdventureById = async (id: number) => {
  const selectedAdventure = adventureList.find((x: any) => x.adventureId === id);
  // console.log(selectedAdventure);
  return selectedAdventure;
}
 export const editAdventure = async (adventure: any) => {
  // console.log("Edit window");
  // console.log(adventure);
  const url = `https://localhost:5001/api/AdventureBook/UpdateAdventure`;
  await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(adventure),
  });
};
export const deleteAdventure = async (adventureId: any) => {
  console.log("Delete api");
  // console.log(adventureId);
  const url = `https://localhost:5001/api/AdventureBook/DeleteAdventure/${adventureId}`;
  await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  });
};

export const addAdventure = async (adventure: any) => {
  console.log(adventure.adventureStruct);
  const url = `https://localhost:5001/api/AdventureBook/AddAdventure`;
  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(adventure.adventureStruct),
  });
};
export default getAdventures;

