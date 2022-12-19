const { pesan, jadwal} = require("../../models");

exports.addPesan = async (req, res) => {
  try {
    const idJadwal = req.body.idJadwal;

    // Cari jadwal dengan id tersebut
    const jadwalData = await jadwal.findOne({
      where: {
        id: idJadwal,
      },
    });

    if (!jadwalData) {
      res.status(400).send({
        status: 'failed',
        message: 'Jadwal tidak ditemukan',
      });
      return;
    }

    // Cek apakah kuota jadwal sudah penuh
    if (jadwalData.quota <= 0) {
      res.status(400).send({
        status: 'failed',
        message: 'Kuota jadwal sudah penuh',
      });
      return;
    }

    jadwalData.quota -= 1;

    await jadwalData.save();

    // Simpan data pesanan ke database
    const data = {
      name: req.body.name,
      phone: req.body.phone,
      tipe_mobil: req.body.tipe_mobil,
      no_plat: req.body.no_plat,
      kerusakan: req.body.kerusakan,
      idJadwal,
      waktu_pesan: req.body.waktu_pesan,
    };
    let pesanData = await pesan.create(data);
    pesanData = JSON.parse(JSON.stringify(pesanData));

    res.send({
      status: 'success',
      data: {
        ...pesanData,
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