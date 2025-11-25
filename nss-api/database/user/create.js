import DB from ".../models/User.js";

export default async function create(data) {
  try {
    const result = await DB.create(data);
  } catch (e) {}
}
