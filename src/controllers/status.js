// const { status, pesan, user } = require("../../models");

// exports.getAllPesan = async (req, res) => {
//   try {
//     // Cari semua data pemesanan yang memiliki konfirmasi false
//     const pesanData = await pesan.findAll({
//       include: [
//         {
//           model: status,
//           as: 'status',
//           where: {
//             konfirmasi: false,
//           },
//           include: [
//             {
//               model: user,
//               as: 'deller',
//             },
//           ],
//         },
//       ],
//     });

//     // Kirimkan data pemesanan yang ditemukan ke client
//     res.send({
//       status: 'success',
//       data: pesanData,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       status: 'failed',
//       message: 'Server Error',
//     });
//   }
// };

// // update konfirmasi //

//  exports.updatePesanKonfirmasi = async (req, res) => {
//     try {
//       // Cari data pemesanan yang akan diupdate konfirmasinya
//       const pesanData = await pesan.findOne({
//         where: {
//           id: req.params.id,
//         },
//         include: [
//           {
//             model: status,
//             as: 'status',
//             where: {
//               konfirmasi: false,
//             },
//           },
//         ],
//       });
  
//       // Jika data pemesanan tidak ditemukan, kirimkan pesan error
//       if (!pesanData) {
//         return res.status(404).send({
//           status: 'failed',
//           message: 'Pesan tidak ditemukan',
//         });
//       }
  
//       // Update konfirmasi pada tabel status menjadi true
//       await status.update(
//         { konfirmasi: true },
//         {
//           where: {
//             id: pesanData.status.id,
//           },
//         }
//       );
  
//       // Kirimkan response success ke client
//       res.send({
//         status: 'success',
//         message: 'Pesan berhasil dikonfirmasi',
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
//         status: 'failed',
//         message: 'Server Error',
//       });
//     }
//   };