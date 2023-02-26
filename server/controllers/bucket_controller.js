const buckets = require('express').Router()
const db = require('../models')
const { Bucket } = db

// get all the buckets
buckets.get('/', async (req,res) => {
    try {
        const foundBuckets = await Bucket.findAll()
        res.status(200).json(foundBuckets)
    } catch (err) {
        res.status(500).json('server error')
        console.log(err)
    }
})

// get a bucket by id
buckets.get('/:id', async (req, res) => {
    try {
        const foundBucket = await Bucket.findOne({
            where: { id: req.params.id },
        })
        res.status(200).json(foundBucket)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// CREATE NEW bucket
buckets.post('/create', async (req, res) => {
    try {
        const newBucket = await Bucket.create(req.body)
        res.status(200).json({
            data: newBucket,
        })
    } 
    catch (err) {
        res.status(500).json("server error")
        console.log(err)
    }
})

// UPDATE A bucket by id
buckets.put('/:id', async (req, res) => {
    try {
        const updatedBucket = await Bucket.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json({
            message: `Bucket ${req.params.id} updated successfully`
        })
    } catch (err) {
        res.status(500).json("server error")
        console.log(err)
    }
})

// DELETE A BAND BY ID
buckets.delete('/:id', async (req, res) => {
    try {
        const deletedBucket = await Bucket.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({
            message: `Bucket ${req.params.id} deleted successfully`
        })
    } catch (err) {
        res.status(500).json("server error")
        console.log(err)
    }
})
module.exports = buckets