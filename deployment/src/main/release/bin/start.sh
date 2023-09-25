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

umask 027

TEST_PID=`ps -ef | grep $APP_ROOT | grep $PROCESS_NAME-$NODE_ID-$PROCESS_SLOT | grep -v grep | awk '{print $2}'`
if [[ $TEST_PID != "" ]];then
  kill -9 $TEST_PID
fi

COMPLETE_PROCESS_NAME=$PROCESS_NAME-$NODE_ID-$PROCESS_SLOT
AGENT_ARG="-DNFW=$COMPLETE_PROCESS_NAME"
$APP_ROOT/bin/start_i.sh $AGENT_ARG &

result=0;$CUR_PATH/../../../../manager/agent/tools/shscript/syslogutils.sh "$(basename $0)" "$result" "Execute($#):$CUR_PATH/$0 $@";exit $result
