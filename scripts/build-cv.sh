#!/bin/sh
# Compile main.tex and publish it as the site's CV.
set -e
cd "$(dirname "$0")/.."
PATH="/Library/TeX/texbin:$PATH"
out="$(mktemp -d)"
pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$out" main.tex >/dev/null || {
  tail -30 "$out/main.log"; exit 1; }
cp "$out/main.pdf" public/Shabbir_Hussain_CV.pdf
rm -rf "$out"
echo "Wrote public/Shabbir_Hussain_CV.pdf"
