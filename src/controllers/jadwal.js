const { jadwal, user } = require('../../models');

exports.addJadwal = async (req, res) => {
  try {
    const data = {
      jadwal: req.body.jadwal,
      quota: req.body.quota,
      idDeller: req.user.id,
    };

    // Cek kuota melebihi batas maksimal (100)
    if (data.quota > 100) {
      res.status(400).send({
        status: 'failed',
        message: 'Kuota melebihi batas maksimal (100)'
      });
      return;
    }

    let newJadwal = await jadwal.create(data);

    let jadwalData = await jadwal.findOne({
      where: {
        id: newJadwal.id,
      },
      include: [
        {
          model: user,
          as: 'user',
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idDeller'],
      },
    });
    jadwalData = JSON.parse(JSON.stringify(jadwalData));

    res.send({
      status: 'success',
      data: {
        ...jadwalData,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};


// get data //

exports.getJadwal = async (req, res) => {
  try {
    const { id } = req.params;
    // data jadwal sesuai id yang diberikan
let jadwalData = await jadwal.findOne({
  where: {
    id,
  },
  include: [
    {
      model: user,
      as: 'user',
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'password'],
      },
    },
  ],
  attributes: {
    exclude: ['createdAt', 'updatedAt', 'idDeller'],
  },
});

// Jika jadwal tidak ditemukan, kirimkan pesan error
if (!jadwalData) {
  res.status(404).send({
    status: 'failed',
    message: 'Jadwal tidak ditemukan',
  });
  return;
}

jadwalData = JSON.parse(JSON.stringify(jadwalData));
res.send({
  status: 'success',
  data: {
    ...jadwalData,
  },
});
} catch (error) {
  console.log(error);
  res.status(500).send({
    status: 'failed',
    message: 'Server Error',
  });
 }
};

// update quota //

const util = require('util');

exports.updateQuota = async (req, res) => {
  try {
    const { id } = req.params;
    const data = {
      quota: req.body.quota,
    };

    // kuota melebihi batas maksimal (100)
    if (data.quota > 100) {
      res.status(400).send({
        status: 'failed',
        message: 'Kuota melebihi batas maksimal (100)'
      });
      return;
    }

    // data jadwal sesuai id yang diberikan
    let jadwalData = await jadwal.findOne({
      where: {
        id,
      },
      include: [
        {
          model: user,
          as: 'user',
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idDeller'],
      },
    });

    
    if (!jadwalData) {
      res.status(404).send({
        status: 'failed',
        message: 'Jadwal tidak ditemukan',
      });
      return;
    }

    delete jadwalData.include;

    await jadwal.update(data, {
      where: {
        id,
      },
    });

    jadwalData = await jadwal.findOne({
      where: {
        id,
      },
      include: [
        {
          model: user,
          as: 'user',
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idDeller'],
      },
    });

    jadwalData = JSON.stringify(jadwalData);
    res.send({
      status: 'success',
      data: jadwalData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

