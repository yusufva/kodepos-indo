var express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

exports.getKodePos = async (req, res) => {
    // [kelurahan]-[kecamatan]-[kota]
    const q = req.query.q
    const queryArray = q.split("-");
    const kelurahan = queryArray[0];
    const kecamatan = queryArray[1];
    const kota = queryArray[2];
    const provinceId = req.params.id;
    const kodepos = await prisma.db_postal_code_data.findFirst({
        where:{
            urban: kelurahan,
            sub_district: kecamatan,
            city: kota,
            province_code: +provinceId
        }
    });
    if (!kodepos) {
        return res.json({
            result: "failed",
            statusCode: "404",
            message: "data not found"
        })
    }
    kodepos.id = parseInt(kodepos.id);
    return res.json({
        result: "success",
        statusCode: "200",
        message: "data successfully fetched",
        data: kodepos
    });
}