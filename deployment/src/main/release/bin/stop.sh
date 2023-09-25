#!/bin/bash
#check user
CUR_PATH=$(cd `dirname $0`;pwd)
SCRIPT_PATH=$0
IPMC_USER="`stat -c '%U' ${SCRIPT_PATH}`"
export IPMC_USER
CURRENT_USER="`/usr/bin/id -u -n`"
if [ "${IPMC_USER}" != "${CURRENT_USER}" ]
then
    echo "only ${IPMC_USER} can execute this script."
    exit 1
fi
kill -9 $PID

result=0;$CUR_PATH/../../../../manager/agent/tools/shscript/syslogutils.sh "$(basename $0)" "$result" "Execute($#):$CUR_PATH/$0 $@";exit $result
