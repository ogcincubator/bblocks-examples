# Process building blocks
echo on
docker run --pull=always --rm --workdir /workspace -v "%~dp0%\workspace" ghcr.io/opengeospatial/bblocks-postprocess  --clean true