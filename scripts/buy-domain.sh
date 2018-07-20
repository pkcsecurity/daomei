#!/bin/sh

JSON_FILE=skeleton.json

aws route53domains register-domain --cli-input-json file://./${JSON_FILE}
