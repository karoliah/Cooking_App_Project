'use strict';
//const pool = require('../database/db');
const promisePool = require('../database/db').promise();

const getAllPhotos = async () => {
  try {
    const [rows] = await promisePool.query('SELECT photo_id, user.name, age, weight, owner, filename, user_id, user.name AS ownername FROM photos LEFT JOIN wop_user ON owner = user_id');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getPhoto = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat WHERE cat_id = ?', [ id ]);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertPhoto = async (photo) => {
  try {
    console.log('insert photo?', photo);
    const [rows] = await promisePool.query('INSERT INTO photos (caption, filename) VALUES (?, ?)', [photo.caption, photo.filename]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const updatePhoto = async (photo) => {
  try {
    console.log('insert photo?', photo);
    const [rows] = await promisePool.query('UPDATE wop_cat SET name = ?, age = ?, weight = ?, owner = ? WHERE wop_cat.cat_id = ?', [ cat.name, cat.age, cat.weight, cat.owner, cat.id ]);
    return rows;
  } catch (e) {
    console.error('updatePhoto model crash', e.message);
  }
};

const deletePhoto = async (id) => {
  try {
    console.log('delete cat', id);
    const [rows] = await promisePool.query('DELETE FROM wop_cat WHERE wop_cat.cat_id = ?', [ id ]);
    console.log('deleted?', rows);
    return rows;
  } catch (e) {
    console.error('deleteCat model', e.message);
  }
}

module.exports = {
  getAllPhotos,
  getPhoto,
  insertPhoto,
  updatePhoto,
  deletePhoto,
};

