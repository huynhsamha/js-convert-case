#!/bin/bash

PACKAGE="js-convert-case"
VERSION="$1"

SCRIPTS=`dirname "$0"`
ROOT=`dirname "$SCRIPTS"`
RELEASES="$ROOT/releases"
DIST="$ROOT/dist"
LIB="$ROOT/lib"

rm -rf "$RELEASES"

echo
echo "Build packge for both dist and lib..."
echo

DIR="$PACKAGE-$VERSION"
TAR_GZ="$DIR.tar.gz"
TAR="$DIR.tar"
ZIP="$DIR.zip"

mkdir -p "$RELEASES/$DIR"

cp -R "$DIST" "$LIB" "$RELEASES/$DIR"

cd "$RELEASES"

echo "Make $TAR_GZ"
tar -czf "$TAR_GZ" "$DIR"
echo "Make $TAR"
tar -cf "$TAR" "$DIR"
echo "Make $ZIP"
zip -rq "$ZIP" "$DIR"

cd "../"
echo
echo "======================================"
echo
echo "Build packge for browser..."
echo

DIR="$PACKAGE-browser-$VERSION"
TAR_GZ="$DIR.tar.gz"
TAR="$DIR.tar"
ZIP="$DIR.zip"

mkdir -p "$RELEASES/$DIR"

cp -R "$DIST" "$RELEASES/$DIR"

cd "$RELEASES"
echo "Make $TAR_GZ"
tar -czf "$TAR_GZ" "$DIR"
echo "Make $TAR"
tar -cf "$TAR" "$DIR"
echo "Make $ZIP"
zip -rq "$ZIP" "$DIR"

cd "../"
echo
echo "======================================"
echo
echo "Release files:"
echo
echo "$RELEASES/$TAR_GZ"
echo "$RELEASES/$TAR"
echo "$RELEASES/$ZIP"
echo
echo "Done"
