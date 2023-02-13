const buckets = require('express').Router()
const db = require('../src')
const { Bucket } = db
const { Op } = require('sequelize')
const bucketModel = require('../models/bucketModel')

// GET ALL BANDS
buckets.get('/', async (req, res) => {
    try {
        const foundBuckets = await Bucket.findAll({
            order: [[  ]],
            where: {
                name: {  }
            }
        })
        res.status(200).json(foundBuckets)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// GET ONE BAND BY ID
buckets.get('/:name', async (req, res) => {
    try {
        console.log(req.query)
        const foundBuckets = await Bucket.findOne({
            where: { name: req.params.name },
            include: [
                {
                    model: bucketModel,
                    as: 'bucketModel',
                    include: {
                        model: Event,
                        as: 'event',
                        where: {
                            name: { [Op.like]: `%${req.query.event || ''}%` }
                        }
                    }
                },
                {
                    model: SetTime,
                    as: 'set_times',
                    include: {
                        model: Event,
                        as: 'event',
                        where: {
                        }
                    }
                }
            ]
        })
        res.status(200).json(foundBand)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})


// CREATE NEW BAND
buckets.post('/', async (req, res) => {
    try {
        const newBucket = await Bucket.create(req.body)
        res.status(200).json({
            message: 'Band created successfully',
            data: newBucket
        })
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

// UPDATE A BAND BY ID
buckets.put('/:id', async (req, res) => {
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
buckets.delete('/:id', async (req, res) => {
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