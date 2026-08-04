#!/usr/bin/env bash

set -euo pipefail

echo ".codex/run_test_suite.sh: Running documentation verification"

cd docs
npm run build
