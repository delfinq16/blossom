import store from '../../store';
export const POS_PRINTERS = 'POS_PRINTERS';

export const setPrinter = ( printers ) => {

  return {
    type: POS_PRINTERS,
    printers
  }
};

export const UpdateDefaultPrinterWC = (defaultPrinter) => (dispatch) => {

  let printer_list = [
    { a3: 'A3 Printer' },
    { a4: 'A4 Printer' },
    { T88V: 'Epson TM-T88V Thermal Printer' },
    { a5: 'A5 Printer' },
    { a6: 'A6 Printer' },
  ]; 

  let printers = {
    list : printer_list,
    isFetching : 1,
    default : defaultPrinter
  }

  dispatch(setPrinter(printers));    

};


