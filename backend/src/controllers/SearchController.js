const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringArray');

module.exports = {
    async index(request, response){
        //buscar todos os devs num raio 10km
        //filtrar por tecnologia

        const { latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 1000,
                },
            },
        })

        return response.json({ devs });
    }
}