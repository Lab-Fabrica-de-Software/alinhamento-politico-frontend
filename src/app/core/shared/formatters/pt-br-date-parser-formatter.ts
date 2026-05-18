import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class PtBrDateParserFormatter extends NgbDateParserFormatter {

  // Converte a data do modelo para string no input (dd/mm/yyyy)
  format(date: NgbDateStruct | null): string {
    if (!date) {
      return '';
    }
    const day = date.day < 10 ? '0' + date.day : date.day;
    const month = date.month < 10 ? '0' + date.month : date.month;
    return `${day}/${month}/${date.year}`;
  }

  // Converte a string do input para NgbDateStruct
  parse(value: string): NgbDateStruct | null {
    if (!value) {
      return null;
    }
    const parts = value.trim().split('/');
    if (parts.length !== 3) {
      return null;
    }
    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return null;
    }
    return { day, month, year };
  }
}
