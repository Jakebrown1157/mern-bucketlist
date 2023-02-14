const buckets = require('express').Router()
const db = require('../models')
const { Bucket } = db


// get one bucket
buckets.get('/Home', async (req, res) => {
    try {
        const foundBuckets = await Bucket.findAll({
            order: [['difficulty', 'ASC' ]]
        })
        res.status(200).json(foundBuckets)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// get one bucket by id
buckets.get('/Home/:id', async (req, res) => {
    try {
        console.log(req.query)
        const foundBucket = await Bucket.findOne({
            where: { bucket_id: req.params.id },
        })
        res.status(200).json(foundBucket)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})


// CREATE NEW bucket
buckets.post('/Create', async (req, res) => {
    try {
        const newBucket = await Bucket.create(req.body)
        res.status(200).json({
            message: 'Bucket created successfully',
            data: newBucket
        })
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// UPDATE A bucket by id
buckets.put('/Edit/:id', async (req, res) => {
    try {
        const updatedBucket = await Bucket.update(req.body, {
            where: { bucket_id: req.params.id }
        })
        res.status(200).json({
            message: `Bucket ${req.params.id} updated successfully`
        })
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// DELETE A BAND BY ID
buckets.delete('/Delete/:id', async (req, res) => {
    try {
        const deletedBucket = await Bucket.destroy({
            where: { bucket_id: req.params.id }
        })
        res.status(200).json({
            message: `Bucket ${req.params.id} deleted successfully`
        })
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

module.exports = buckets