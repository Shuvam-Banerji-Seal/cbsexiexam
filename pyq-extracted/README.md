# CBSE Class XII Computer Science — Previous Year Question Papers (extracted)

Raw text extraction of the official CBSE Class XII Computer Science (Code 083)
board question papers, downloaded from the CBSE question-paper archive:

**Source:** https://www.cbse.gov.in/cbsenew/question-paper.html

| File | Paper | Session | Extraction |
|---|---|---|---|
| `2022_XII_Computer_Science.txt` | Q.P. Code 91 | 2022 (Term-2 style, 13 Qs) | OCR (scanned original) |
| `2022-COMPTT_XII_Computer_Science.txt` | Q.P. Code 91 | 2022 Compartment | text layer |
| `2023-COMPTT_XII_Computer_Science.txt` | Q.P. Code 91 | 2023 Compartment (35 Qs) | text layer |
| `2024_XII_Computer_Science.txt` | Q.P. Code 91 | 2024 (35 Qs) | OCR (scanned original) |
| `2024-COMPTT_XII_Computer_Science.txt` | Q.P. Code 91/S | 2024 Compartment (35 Qs) | text layer |
| `2025-COMPTT_XII_Computer_Science.txt` | Q.P. Code 91/S | 2025 Compartment (41 Qs) | text layer |
| `2026_XII_Computer_Science.txt` | Q.P. Code 91 | 2026 (37 Qs) | text layer |
| `2026-COMPTT_XII_Computer_Science.txt` | Q.P. Code 91/7 | 2026 Compartment (37 Qs) | text layer |

## Notes on the extraction

- The original papers are bilingual (Hindi + English). Hindi text was filtered out
  (CBSE uses legacy non-Unicode font mappings for the Hindi half, which appear as
  Private-Use-Area codepoints).
- The 2022 and 2024 main-session papers are image-only scans; their text comes from
  Tesseract OCR and may contain minor recognition artefacts. All questions selected
  for the September 18 examination from these papers were manually verified.
- Layout columns may interleave for a few questions; use the question number markers
  and the Q.P. Code footer lines as anchors.

## How these were used

The **September 18 Examination** (`exams/september18/`) was assembled from these
papers: 50 objective questions and 20 written (short/long answer) questions, each
citing its source paper. Programming output questions were verified by executing the
Python code; database and networking questions were checked against the CBSE syllabus.
