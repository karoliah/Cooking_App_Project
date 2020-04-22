'use strict';
//const pool = require('../database/db');
const promisePool = require('../database/db').promise();

const getAllPhotos = async () => {
  try {
    const [rows] = await promisePool.query('SELECT photos.id, filename, user_id, timestamp FROM photos, users WHERE user_id = id');
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getPhoto = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM photos WHERE id = ?', [ id ]);
    return rows[0];
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertPhoto = async (photo) => {
  try {
    console.log('insert photo?', photo);
    const [rows] = await promisePool.query('INSERT INTO photos (id, filename, user_id, caption) VALUES (?, ?, ?, ?)', [ photo.id, photo.filename, photo.weight, photo.user_id, photo.caption ]);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const updatePhoto = async (photo) => {
  try {
    console.log('insert photo?', photo);
    const [rows] = await promisePool.query('UPDATE photos SET caption = ? WHERE photos.id = ?', [ photo.caption, photo.id ]);
    return rows;
  } catch (e) {
    console.error('updatePhoto model crash', e.message);
  }
};

const deletePhoto = async (id) => {
  try {
    console.log('delete cat', id);
    const [rows] = await promisePool.query('DELETE FROM photos WHERE photos.id = ?', [ id ]);
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

