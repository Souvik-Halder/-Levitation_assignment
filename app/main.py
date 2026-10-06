import sys
import os
from zlib import compress, decompress

def main():
    # You can use print statements as follows for debugging, they'll be visible when running tests.
    

    # TODO: Uncomment the code below to pass the first stage
    
    command = sys.argv[1:]
   
    if command == ["init"]:
        os.mkdir(".git")
        os.mkdir(".git/objects")
        os.mkdir(".git/refs")
        with open(".git/HEAD", "w") as f:
            f.write("ref: refs/heads/main\n")
        print("Initialized git directory")
    if command[0] == "cat-file" and command[1] == "-p":
        blob_hash = command[2]
        
        with open(f".git/objects/{blob_hash[:2]}/{blob_hash[2:]}", "rb") as f:
            compressed_data = f.read()
            decompressed_data = decompress(compressed_data)
            content=decompressed_data.split(b'\x00', 1)[1]
            print(f"Content: {content.decode()}")

    else:
        raise RuntimeError(f"Unknown command #{command}")


if __name__ == "__main__":
    main()
