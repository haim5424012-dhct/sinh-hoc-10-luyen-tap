from pathlib import Path
import json
import pandas as pd

path = Path('/home/ubuntu/upload/pasted_file_g6CFNR_so_diem_chi_tiet_lop_10a9_mon_sinh_hoc.xls')
result = {'file': path.name, 'sheets': []}
try:
    book = pd.ExcelFile(path)
    result['engine'] = book.engine
    for sheet in book.sheet_names:
        raw = pd.read_excel(path, sheet_name=sheet, header=None, dtype=object)
        result['sheets'].append({'name': sheet, 'rows': int(raw.shape[0]), 'columns': int(raw.shape[1]), 'preview': raw.iloc[:20, :20].where(pd.notna(raw.iloc[:20, :20]), '').values.tolist()})
except Exception as exc:
    result['error'] = f'{type(exc).__name__}: {exc}'
Path('/home/ubuntu/sinh-hoc-10-luyen-tap/scorebook_structure.json').write_text(json.dumps(result, ensure_ascii=False, indent=2, default=str), encoding='utf-8')
print(json.dumps(result, ensure_ascii=False, indent=2, default=str)[:12000])
