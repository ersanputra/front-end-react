import React from 'react';

function addHoursToDate(isoDateString, hoursToAdd) {
    // Parse the ISO date string into a Date object
    const date = new Date(isoDateString);
  
    // Add the specified number of hours
    date.setHours(date.getHours() + hoursToAdd);
  
    // Manually construct the date string in the desired format
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // January is 0
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${hours}:${minutes} ${day}/${month}/${year}`;
  }

  const formatRupiah = (number) => {
    const parts = number.toFixed(0).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `Rp. ${parts.join('.')}`;
  };

  const Invoice = ({ order }) => {
    return (
      <div className="bg-white rounded-md w-full">
        <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-4 overflow-x-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-gray-700 font-semibold">
                Order 
              </h3>
              <span className="text-sm text-gray-500 font-semibold">
                {order.Payments[0]?.invoice || 'No Invoice'}
              </span>
            </div>
  
            <div className="flex justify-between items-center mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    order.status === 'Delivered' ? 'text-green-900 bg-green-200' :
                    order.status === 'Shipped' ? 'text-blue-900 bg-blue-200' :
                    order.status === 'InProcess' ? 'text-yellow-900 bg-yellow-200' :
                    'text-red-900 bg-red-200' // Default style for 'Pending' or other statuses
                }`}>
                  {order.status === 'Pending' && 'Belum Bayar'}
                  {order.status === 'InProcess' && 'Dalam Proses'}
                  {order.status === 'Shipped' && 'Sedang Dikirim'}
                  {order.status === 'Delivered' && 'Selesai'}
                </span>
              <span className="text-sm text-gray-500">
                {addHoursToDate(order.order_date, 0)}
              </span>
            </div>
  
            <div className="mb-6">
              <h4 className="text-lg text-gray-700 font-semibold mb-2">Alamat Pengiriman</h4>
              <div className="text-sm text-gray-600">
                  <p>{order.Address.recipient_name} ({order.Address.phone_number})</p>
                  <p>{order.Address.address}</p>
              </div>
            </div>
  
            <div className="mb-4">
              <h4 className="text-lg text-gray-700 font-semibold mb-2">Detail Kue</h4>
              {order.OrderDetails.map((detail) => (
                <div key={detail.order_detail_id} className="flex items-center mb-4">
                  <img 
                    src={detail.Cake.image} 
                    alt={detail.Cake.name} 
                    className="w-20 h-20 object-cover mr-4 rounded"
                  />
                  <div className="text-gray-900 text-lg">
                    <p>{detail.Cake.name} (Qty: {detail.quantity})</p>
                    <p>Harga: {formatRupiah(detail.Cake.price)}</p>
                    <p>Subtotal: {formatRupiah(detail.quantity * detail.Cake.price)}</p>
                  </div>
                </div>
              ))}
            </div>
  
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-black">
                Total Price: {formatRupiah(order.total_price)}
              </span>
            </div>
  
            <div className="mb-4">
              <p className="text-gray-900 text-lg">
                Kue Untuk Tanggal: {addHoursToDate(order.order_date, 0)}
              </p>
              <p className="text-gray-900 text-lg">
                Metode Pembayaran: {order.Payment?.payment_method || 'Tidak Tersedia'}
              </p>
            </div>
          </div>
  
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <button 
              onClick={() => {/* function to handle payment view */}}
              className="text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded"
            >
              Lakukan Pembayaran
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default Invoice;
