#!/bin/bash

DIR=$1
DEST=$2

aws s3 sync "$DIR" "s3://$DEST"
