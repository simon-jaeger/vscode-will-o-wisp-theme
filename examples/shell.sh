function_getopts() {
  # example function
  local OPTIND
  local c='false'
  while getopts 'ab:c' flag; do
    case "${flag}" in
      a) echo "you raised [ ${flag} ]" ;;
      b) echo "you raised [ ${flag} ] with argument [ ${OPTARG} ]" ;;
      c)
        echo "you raised [ ${flag} ]"
        c='true'
        ;;
    esac
  done
  shift "$((OPTIND-1))"
  if [[ "${c}" == 'true' ]]; then
    echo 'c is true'
  fi
  if [[ "${1}" ]]; then
    echo "remaining argument 1: ${1}"
  fi
}
