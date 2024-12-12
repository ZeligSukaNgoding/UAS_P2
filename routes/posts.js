// Impor modul express.js untuk membuat aplikasi web
const express = require('express')

// Buat instance router express
const router = express.Router()

// Impor modul express-validator untuk validasi data
const { body, validationResult } = require('express-validator')

// Impor konfigurasi database
const connect = require('../config/db')

// Fungsi untuk menampilkan semua data
router.get('/', function (req, res) {
  // Query database untuk menampilkan semua data
  connect.query('SELECT * FROM posts ORDER BY id desc', function (err, rows) {
    if (err) {
      // Jika terjadi error, kirim status 500 dan pesan error
      return res.status(500).json({
        status: false,
        message: 'Server is not available'
      })
    } else {
      // Jika data berhasil diambil, kirim status 200 dan data
      return res.status(200).json({
        status: true,
        message: 'Server is available',
        data: rows
      })
    }
  })
})

// Fungsi untuk menambahkan data baru
router.post('/store', [
  // Validasi data input
  body('nama').notEmpty(),
  body('gender').notEmpty(),
  body('sword').notEmpty(),
  body('village').notEmpty(),
  body('jutsu').notEmpty(),
  body('abilities').notEmpty(),
  body('team').notEmpty(),
  body('description').notEmpty(),
], (req, res) => {
  // Cek validasi data
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // Jika terjadi error validasi, kirim status 422 dan pesan error
    return res.status(422).json({
      errors: errors.array()
    })
  }

  // Definisikan data yang akan disimpan
  let formData = {
    nama: req.body.nama,
    gender: req.body.gender,
    sword: req.body.sword,
    village: req.body.village,
    jutsu: req.body.jutsu,
    abilities: req.body.abilities,
    team: req.body.team,
    description: req.body.description,
  }

  // Query database untuk menambahkan data baru
  connect.query('INSERT INTO posts SET?', formData, function (err, rows) {
    if (err) {
      // Jika terjadi error, kirim status 500 dan pesan error
      return res.status(500).json({
        status: false,
        message: 'Error, Try again later'
      })
    } else {
      // Jika data berhasil disimpan, kirim status 201 dan pesan sukses
      return res.status(201).json({
        status: true,
        message: 'Data input Successfully',
      })
    }
  })
})

// Fungsi untuk menampilkan data berdasarkan ID
router.get('/:id', function (req, res) {
  // Ambil ID dari parameter
  let id = req.params.id

  // Query database untuk menampilkan data berdasarkan ID
  connect.query(`SELECT * FROM posts WHERE ID=${id}`,
    function (error, rows) {
      if (error) {
        // Jika terjadi error, kirim status 500 dan pesan error
        return res.status(500).json({
          status: false,
          message: 'Server Error!!'
        })
      }
      // Jika data tidak ditemukan, kirim status 404 dan pesan error
      if (rows.length <= 0) {
        return res.status(404).json({
          status: false,
          message: 'Data is missing'
        })
      } else {
        // Jika data berhasil diambil, kirim status 200 dan data
        return res.status(200).json({
          status: true,
          message: 'Display data according to id',
          data: rows[0]
        })
      }
    }
  )
})

// Fungsi untuk mengupdate data
router.patch('/update/:id', [
  // Validasi data input
  body('nama').notEmpty(),
  body('gender').notEmpty(),
  body('sword').notEmpty(),
  body('village').notEmpty(),
  body('jutsu').notEmpty(),
  body('abilities').notEmpty(),
  body('team').notEmpty(),
  body('description').notEmpty(),
], (req, res) => {
  // Cek validasi data
  const errros = validationResult(req)
  if (!errros.isEmpty()) {
    // Jika terjadi error validasi, kirim status 422 dan pesan error
    return res.status(422).json({
      errors: errros.array()
    })
  }

  // Ambil ID dari parameter
  let id = req.params.id

    let  formData={
        nama: req.body.nama,
        gender: req.body.gender,
        sword: req.body.sword,
        village: req.body.village,
        jutsu: req.body.jutsu,
        abilities: req.body.abilities,
        team: req.body.team,
        description: req.body.description,
    }

    //update query
    connect.query(`UPDATE posts set ? WHERE id=${id}`, formData,
        function(err,rows){
            if(err){
                return res.status(500).json({
                    status: false,
                    message: 'Interval server error'
                })
            }else{
                return res.status(200).json({
                    status: true,
                    message: 'Update data success'
                })
            }
        }
    )
}) 
//Query database untuk megapus data berdasarkan id
router.delete('/delete/(:id)',
    function(req,res){
        let id = req.params.id
        connect.query(`DELETE FROM posts WHERE id = ${id}`,
            function(error,rows){
                if(error){
                    return res.status(500).json({
                        status:false,
                        message: 'Server Error!!'
                    })
                }else {
                    return res.status(200).json({
                        status: true,
                        message: 'Data has been deleted',
                    })
                }
            }
        )
    }
)

module.exports = router